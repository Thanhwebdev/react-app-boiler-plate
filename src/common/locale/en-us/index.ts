export default {
  configFields: {
    description: "Enter your Beebox project credentials. You can obtain these from the Beebox dashboard settings page. <br /> Verify the connection. Hit <strong>Save</strong>, then, <strong>Open Stack</strong>.",
    beeboxSettings: {
      title: "Beebox credentials",
      apiUrl: {
        label: "API Url"
      },
      projectKey: {
        label: "API Project Key"
      },
      login: {
        label: "API Login"
      },
      password: {
        label: "API Password"
      },
      connectBtnLabel: "Verify Connection"
    },
    projectDetails: {
      title: "Project Details",
      sourceLanguage: {
        fieldLabel: "Source Language"
      },
      targetLanguage: {
        fieldLabel: "Target Language(s)"
      },
      sourceLanguageRTL: {
        fieldLabel: "Source Language RTL",
        helpText: "Right to left language, e.g., Arabic and Hebrew."
      }
    }
}
}