export const WHATSAPP_BASE = "https://wa.me/5541995815251"

export const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Yellow Lab e gostaria de saber mais sobre os serviços."
)

export function getWhatsAppLink(message?: string): string {
  const encoded = message ? encodeURIComponent(message) : WHATSAPP_DEFAULT_MESSAGE
  return `${WHATSAPP_BASE}?text=${encoded}`
}
