import type { CollectionConfig } from 'payload'

export const Landingpage_Data: CollectionConfig = {
  slug: 'landingpage_data',
  access: {
    read: () => true,
  },
  fields: [
// ----------------------------Hero Section-------------------------
    {
      name: 'TitleBold',
      type: 'text',
      required: true,
    },
    {
      name: 'TitleNormal',
      type: 'text',
      required: true,
    },
    {
        name: 'HelpText',
        type: 'text',
        required: true,
    },

// ------------------------section Focus-----------------------
    {
      name: 'FocusImage',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'Focusheading',
      type: 'text',
      required: true,
    },
    {
      name: 'FocusSubHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'FocusAdvantages',
      type: 'array',
      fields: [
        {
          name: 'Advantage',
          type: 'text',
        }
      ],
    },
    {
      name:"TrustedCompanes",
      type: 'array',
      maxRows: 6,
      required: true,
      fields:[
        {
          name: 'TrustedCompanesImage',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
      ]
    },

// --------------------------section approch and expertise----------------------

    {
      name: 'ApproachAndExpertiseImage',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'ApproachAndExpertiseHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'ApproachAndExpertiseSubHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'ApproachAndExpertiseTopDiscription',
      type: 'text',
      required: true,
    },
    {
      name: 'Expertise',
      type: 'array',
      fields:[
        {
          name: 'ExpertiseImage',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
        { 
          name: 'Expertise',
          type: 'text',
        },
        { 
          name: 'ExpertiseSubText',
          type: 'text',
        }
      ]
    },

// --------------------------Why Choose Section------------------------


    {
      name: 'WhyChooseSubText',
      type: 'text',
      required: true,
    },
    {
      name: 'WhyChooseAttributes',
      type: 'array',
      required: true,
      fields:[
        {
          name: 'WhyChooseAttributesImage',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
        {
          name: 'WhyChooseAttributeTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'WhyChooseAttributeText',
          type: 'text',
          required: true,
        },
      ]
    },

// ----------------------Partner Section----------------------

    {
      name: 'Partners',
      type: 'array',
      required: true,
      fields:[
        {
          name: 'PartnerImage',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
        {
          name: 'PartnersComapanysImage',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
        {
          name: 'PartnerInformation',
          type: 'text',
          required: true,
        },
        {
          name: 'PartnerOtherDetail',
          type: 'text',
          required: true,
        },
        {
          name: 'PartnerPosition',
          type: 'text',
          required: true,
        },
      ]
    },
  ],
}
