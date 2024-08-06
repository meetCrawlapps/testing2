import type { CollectionConfig } from 'payload'

export const HeaderFooter: CollectionConfig = {
  slug: 'header-footer',
  access: {
    read: () => true,
  },
  fields: [
    {
        name:'LightLogo',
        type: 'upload',
        required: true,
        relationTo:'media',
    },
    {
        name:'DarkLogo',
        type: 'upload',
        required: true,
        relationTo:'media',
    },
    {
        name:'Phone',
        type: 'text',
        required: true,
    },
    {
        name:'FooterText',
        type: 'text',
        required: true,
    },
    {
        name:'CopyrightString',
        type: 'text',
        required: true,
    },
    {
        name: 'socialMediaLinks',
        type: 'array',
        label: 'Social Media Links',
        fields: [
          {
            name: 'platform',
            type: 'select',
            label: 'Platform',
            options: [
              { label: 'Facebook', value: 'facebook' },
              { label: 'Twitter', value: 'twitter' },
              { label: 'Instagram', value: 'instagram' },
              { label: 'call', value: 'call' },
              { label: 'mail', value: 'mail' },
            ],
            admin: {
              isClearable: true,
            },
          },
          {
            name: 'url',
            type: 'text',
            label: 'URL',
            required: true,
          },
        ],
      },
  ],
}
