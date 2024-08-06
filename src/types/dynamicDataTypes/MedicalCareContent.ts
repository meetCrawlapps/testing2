import { Media } from "@/payload-types";
import { HeaderText } from "../heroheading/headingtype";

export interface WhyChooseAttribute{
    WhyChooseAttributesImage: string | Media;
    WhyChooseAttributeTitle: string;
    WhyChooseAttributeText: string;
    id?: string | null;
  }
export interface MedicalCareContent extends HeaderText{
    WhyChooseAttributes?:WhyChooseAttribute[];
}