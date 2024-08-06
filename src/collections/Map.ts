import type { CollectionConfig } from 'payload'

export const Map: CollectionConfig = {
  slug: 'map',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'Locations',
        type: 'array',
        required: true,
        fields:[
          {
            name: 'PlaceName',
            type: 'text',
            required: true,
          },
          {
            name: 'ExactLocation',
            type: 'text',
            required: true,
          },
          {
            name:'Latitude',
            type: 'number',
            required: true,
          },
          {
            name:'Longitude',
            type: 'number',
            required: true,
          },
        ]
      },
  ],
}
