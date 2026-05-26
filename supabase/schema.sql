-- 행정사법인 정유 Supabase Schema
CREATE TABLE contacts (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  phone        TEXT NOT NULL CHECK (char_length(phone) BETWEEN 9 AND 20),
  service_type TEXT NOT NULL DEFAULT '기타',
  message      TEXT NOT NULL CHECK (char_length(message) BETWEEN 1 AND 3000),
  status       TEXT NOT NULL DEFAULT '신규'
               CHECK (status IN ('신규','상담중','완료','보류')),
  admin_note   TEXT DEFAULT '',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert" ON contacts FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "auth_select" ON contacts FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "auth_update" ON contacts FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "auth_delete" ON contacts FOR DELETE TO authenticated
  USING (true);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TRIGGER contacts_updated_at
  BEFORE UPDATE ON contacts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE VIEW contacts_dashboard AS
  SELECT id, name, phone, service_type, status, created_at,
         left(message, 100) AS message_preview
  FROM contacts
  ORDER BY created_at DESC;
