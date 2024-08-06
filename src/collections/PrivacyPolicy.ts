import type { CollectionConfig } from 'payload'

export const PrivacyPolicy: CollectionConfig = {
  slug: 'privacy-policy',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'PrivacyPolicyTitle',
        type: 'text',
        required: true,
    },
    {
        name: 'PrivacyPolicySubText',
        type: 'text',
        required: true,
    },
    {
        name: 'PrivacyPolicyContent',
        type: 'array',
        required: true,
        fields: [
            {
                name: 'question',
                type: 'text',
                label:"Question"
            },
            {
                name: 'answer',
                type: 'array',
                label:"Answer",
                fields:[
                    {
                        name: 'answer_text',
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
                name: 'notify',
                type: 'text',
                label:"Notify"
            },
            {
                name: 'notify_way',
                type: 'array',
                label:"Notify Ways",
                fields:[
                    {
                        name: 'notify_way_text',
                        type: 'text',
                        label:"text"
                    }
                ]
            },
            {
                name: 'requirements',
                type: 'array',
                label:"Requirments",
                fields:[
                    {
                        name: 'requirment',
                        type: 'text',
                        label:"text"
                    }
                ]
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
            {
                name: 'title',
                type: 'text',
                label:"Title"
            },
            {
                name: 'desc',
                type: 'text',
                label:"Description"
            },
        ],
    }
  ],
}
