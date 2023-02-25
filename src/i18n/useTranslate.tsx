import { useTranslation } from "react-i18next";

export const useTranslate = () => {
  const { t, i18n } = useTranslation();

  function changeTranslate(lang: string) {
    i18n.changeLanguage(lang);
  }

  return { translate: t, changeTranslate };
};
