import { useState } from 'react'
import { supabase } from '../lib/supabase'
const INIT = { name:'', phone:'', service_type:'', message:'' }
export function useContactForm() {
  const [formData, setFormData] = useState(INIT)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setError(null)
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('이름, 연락처, 문의내용은 필수 항목입니다.'); setLoading(false); return
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, '')
    if (!/^0[0-9]{8,10}$/.test(phoneClean)) {
      setError('올바른 연락처 형식으로 입력해주세요.'); setLoading(false); return
    }
    try {
      const { error: dbError } = await supabase.from('contacts').insert([{
        name: formData.name.trim(), phone: formData.phone.trim(),
        service_type: formData.service_type || '기타',
        message: formData.message.trim(), status: '신규',
      }])
      if (dbError) throw dbError
      setSuccess(true); setFormData(INIT)
    } catch (err) {
      console.error('[ContactForm]', err)
      setError('문의 등록 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 전화로 연락해 주세요.')
    } finally { setLoading(false) }
  }
  return { formData, loading, success, error, handleChange, handleSubmit, resetSuccess:()=>setSuccess(false) }
}
