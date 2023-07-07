import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session from "supertokens-auth-react/recipe/session";
import Router from "next/router";

export let frontendConfig = () => {
  return {
    languageTranslations: {
      translations: {
        ru: {
          BRANDING_POWERED_BY_START: "",
          BRANDING_POWERED_BY_END: "",
          PWLESS_SIGN_IN_UP_EMAIL_OR_PHONE_LABEL: "Email",
          THIRD_PARTY_PASSWORDLESS_SIGN_IN_AND_UP_DIVIDER_OR: "или",
          THIRD_PARTY_PASSWORDLESS_SIGN_IN_AND_UP_HEADER_TITLE: process.env.NEXT_PUBLIC_HEADER_TITLE || "Test-Soyuz",
          PWLESS_SIGN_IN_UP_CONTINUE_BUTTON: "Продолжить",
          THIRD_PARTY_PROVIDER_DEFAULT_BTN_START: "войти с ",
          THIRD_PARTY_PROVIDER_DEFAULT_BTN_END: "",
          SOMETHING_WENT_WRONG_ERROR: "что-то пошло не так ... попробуйте позже",
          PWLESS_USER_INPUT_CODE_HEADER_TITLE:"введите КОД",
          PWLESS_USER_INPUT_CODE_INPUT_LABEL:"",
          PWLESS_USER_INPUT_CODE_HEADER_SUBTITLE_LINK:"проверьте почту",
          PWLESS_RESEND_BTN_EMAIL:"Отправить код повторно",
          PWLESS_RESEND_BTN_PHONE: "Отправить SMS",
          PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_EMAIL: "сменить email",
          GENERAL_ERROR_OTP_INVALID: "ошибочный код",
          PWLESS_RESEND_BTN_DISABLED_START: "Повторно через ",
          PWLESS_RESEND_BTN_DISABLED_END: "",


          GENERAL_ERROR_EMAIL_UNDEFINED: "Укажите email",
          GENERAL_ERROR_EMAIL_NON_STRING: "Email должен быть строкой",
          GENERAL_ERROR_EMAIL_INVALID: "Email с ошибкой",

          GENERAL_ERROR_PHONE_UNDEFINED: "Пожалуйста, укажите свой номер телефона",
          GENERAL_ERROR_PHONE_NON_STRING: "Номер телефона должен быть строкового типа.",
          GENERAL_ERROR_PHONE_INVALID: "Номер телефона недействителен",

          GENERAL_ERROR_EMAIL_OR_PHONE_UNDEFINED: "Пожалуйста, укажите свой адрес электронной почты или номер телефона",
          GENERAL_ERROR_EMAIL_OR_PHONE_NON_STRING: "Электронная почта или номер телефона должны быть строкового типа.",
          GENERAL_ERROR_EMAIL_OR_PHONE_INVALID: "Электронная почта или номер телефона недействительны",

          GENERAL_ERROR_OTP_UNDEFINED: "Пожалуйста, заполните OTP",
          GENERAL_ERROR_OTP_EXPIRED: "Просрочен OTP.",
          GENERAL_ERROR_OTP_NON_STRING: "OTP должен быть строкой",
          GENERAL_ERROR_OTP_EMPTY: "OTP не должен быть пустым",

          ERROR_SIGN_IN_UP_LINK: "Недействительная магическая ссылка. Пожалуйста, попробуйте еще раз.",
          ERROR_SIGN_IN_UP_RESEND_RESTART_FLOW: "Время входа истекло. Пожалуйста, попробуйте еще раз.",
          ERROR_SIGN_IN_UP_CODE_CONSUME_RESTART_FLOW: "Вход неудачный. Пожалуйста, попробуйте еще раз.",

          PWLESS_CLOSE_TAB_TITLE: "Успешно!",
          PWLESS_CLOSE_TAB_SUBTITLE_LINE1: "Вы успешно вошли в систему.",
          PWLESS_CLOSE_TAB_SUBTITLE_LINE2: "Пожалуйста, закройте эту вкладку",

          PWLESS_SIGN_IN_UP_HEADER_TITLE: "Зарегистрируйтесь или войдите.",

          PWLESS_SIGN_IN_UP_FOOTER_START: "Продолжая, вы соглашаетесь с нашими ",
          PWLESS_SIGN_IN_UP_FOOTER_TOS: "условиями обслуживания",
          PWLESS_SIGN_IN_UP_FOOTER_AND: " и ",
          PWLESS_SIGN_IN_UP_FOOTER_PP: "политикой безопасности",
          PWLESS_SIGN_IN_UP_FOOTER_END: "",

          PWLESS_SIGN_IN_UP_EMAIL_LABEL: "Email",
          PWLESS_SIGN_IN_UP_PHONE_LABEL: "Телефон",
          PWLESS_EMAIL_OR_PHONE_INVALID_INPUT_GUESS_PHONE_ERR: "Пожалуйста, введите действительный номер телефона с кодом страны.",

          PWLESS_LINK_SENT_RESEND_SUCCESS: "Ссылка повторно",
          PWLESS_LINK_SENT_RESEND_TITLE: "Ссылка отправлена!",
          PWLESS_LINK_SENT_RESEND_DESC_START_EMAIL: "Мы отправили ссылку на ",
          PWLESS_LINK_SENT_RESEND_DESC_START_PHONE: "Мы отправили ссылку на ваш номер телефона ",
          PWLESS_LINK_SENT_RESEND_DESC_END_EMAIL: " Нажмите на ссылку, чтобы войти или зарегистрироваться",
          PWLESS_LINK_SENT_RESEND_DESC_END_PHONE: "",

          PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_PHONE: "Изменить номер телефона",

          PWLESS_LINK_CLICKED_CONTINUE_HEADER: "Зарегистрируйтесь или войдите под своим ником",
          PWLESS_LINK_CLICKED_CONTINUE_DESC: "Нажмите кнопку ниже, чтобы войти на этом устройстве",
          PWLESS_LINK_CLICKED_CONTINUE_BUTTON: "Продолжить",

          PWLESS_RESEND_SUCCESS_EMAIL: "Email сброшено",
          PWLESS_RESEND_SUCCESS_PHONE: "SMS сброшено",

          PWLESS_USER_INPUT_CODE_HEADER_SUBTITLE: "Вам был отправлен одноразовый пароль по адресу",

          INCORRECT_USER_INPUT_CODE_ERROR: "ошибочный код",

          RESTART_FLOW_ERROR: "Что-то пошло не так 🙁"
        },
      },
      defaultLanguage: "ru",
    },
    appInfo: {
      appName: "HimExp",
      apiDomain: process.env.NEXT_PUBLIC_API_DOMAIN || "http://localhost:3001",
      websiteDomain: process.env.NEXT_PUBLIC_WEB_SITE || "http://localhost:3000",
      // url по которому размещаются компоненты supertokens (страница авторизации)
      websiteBasePath: "/auth",
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
      /** email, телефон, Google */
      ThirdPartyPasswordless.init({
        getRedirectionURL: async (context) => {
          if (context.action === "SUCCESS") {
            /** редирект на главную */
            return `${process.env.NEXT_PUBLIC_WEB_SITE}`;

            /** редирект на личный кабинет на поддомене */
            //document.location.href = `${process.env.NEXT_PUBLIC_WEB_SITE}`.replace("//", "//lk.")
          }
        },
        signInUpFeature: {
          resendEmailOrSMSGapInSeconds: 180,
          defaultCountry: "RU",
          termsOfServiceLink: `${process.env.NEXT_PUBLIC_WEB_SITE}/oferta` || '',
          privacyPolicyLink: `${process.env.NEXT_PUBLIC_WEB_SITE}/policy`  || '',
        },
        contactMethod: "EMAIL",
        style: process.env.REACT_APP_STYLE || ` 
                [data-supertokens~="superTokensBranding"] {
                    display: none;
                    margin: 0 auto;
                    background: rgb(var(--palette-superTokensBrandingBackground));
                }
            `,
      }),
      Session.init({sessionTokenFrontendDomain: `.${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`}),
    ],
    // this is so that the SDK uses the next router for navigation
    windowHandler: (oI) => {
      return {
        ...oI,
        location: {
          ...oI.location,
          setHref: (href) => {
            Router.push(href);
          },
        },
      };
    },
  };
};
