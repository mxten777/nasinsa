/**
 * 앵커 ID로 부드럽게 스크롤
 * @param {string} id - 요소 id (# 없이)
 */
export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/** 상담 섹션으로 바로 스크롤 */
export const scrollToContact = () => scrollToSection('contact')


