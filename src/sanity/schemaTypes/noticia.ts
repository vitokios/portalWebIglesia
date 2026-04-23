import { defineField, defineType } from 'sanity'
import { NewspaperIcon } from 'lucide-react'

export const noticiaType = defineType({
  name: 'noticia',
  title: 'Noticia',
  type: 'document',
  icon: NewspaperIcon,
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen',
      type: 'text',
      rows: 2,
      description: 'Aparece en las tarjetas de la grilla.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Itálica', value: 'em' },
            ],
          },
        },
        { type: 'image', options: { hotspot: true } },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen destacada',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Congregación', value: 'Congregación' },
          { title: 'Misión', value: 'Misión' },
          { title: 'Jóvenes', value: 'Jóvenes' },
          { title: 'Familia', value: 'Familia' },
          { title: 'Comunidad', value: 'Comunidad' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fechaPublicacion',
      title: 'Fecha de publicación',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'destacada',
      title: '¿Noticia destacada?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'fechaPublicacion',
      media: 'imagen',
    },
  },
  orderings: [
    {
      title: 'Más reciente primero',
      name: 'fechaDesc',
      by: [{ field: 'fechaPublicacion', direction: 'desc' }],
    },
  ],
})
