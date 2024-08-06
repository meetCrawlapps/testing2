import type { CollectionConfig } from 'payload'

export const TermsAndCondition: CollectionConfig = {
  slug: 'terms-and-condition',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'TermsAndConditionTitle',
        type: 'text',
        required: true,
    },
    {
        name: 'TermsAndConditionSubText',
        type: 'text',
        required: true,
    },
    {
        name: 'TermsAndConditionContent',
        type: 'array',
        required: true,
        fields: [
            {
                name: 'title',
                type: 'text',
                label:"Title"
            },
            {
                name: 'desc',
                type: 'array',
                label:"Discription",
                fields:[
                    {
                        name: 'desc_text',
                        type: 'text',
                        label:"text"
                    }
                ]
            },
            {
                name: 'note',
                type: 'text',
                label:"Note"
            },
            {
                name: 'points',
                type: 'array',
                label:"Points",
                fields:[
                    {
                        name: 'point',
                        type: 'text',
                        label:"text"
                    }
                ]
            },
        ],
    }
  ],
}
