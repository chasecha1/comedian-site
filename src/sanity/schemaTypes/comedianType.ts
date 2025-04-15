import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const comedianType = defineType({
  name: 'comedian',
  title: 'Comedian',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    }),
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
      name: 'video',
      title: 'Video',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'Video URL',
          type: 'url',
          validation: Rule => Rule.uri({
            scheme: ['http', 'https'],
          }),
        },
        {
          name: 'name',
          title: 'Video Name',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    }),
  ]
})