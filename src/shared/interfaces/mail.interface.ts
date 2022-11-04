export interface IMailData {
  to: string;
  templateId: string;
  dynamicTemplateData?: { [key: string]: any };
}
