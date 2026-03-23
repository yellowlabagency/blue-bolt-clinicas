export const WHATSAPP_BASE = "https://wa.me/351927135702"

export const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Blue Bolt e gostaria de saber mais sobre o diagnóstico gratuito para a minha clínica."
)

export function getWhatsAppLink(message?: string): string {
  const encoded = message ? encodeURIComponent(message) : WHATSAPP_DEFAULT_MESSAGE
  return `${WHATSAPP_BASE}?text=${encoded}`
}
