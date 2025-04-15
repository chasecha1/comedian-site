import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        })
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'blockContent',
    }),
  ]
})