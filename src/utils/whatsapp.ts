export const WHATSAPP_PHONE_NUMBER = "2349134448903";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

export const openWhatsApp = () => {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
};
