import { defineField, defineType } from 'sanity'
import { BellIcon } from 'lucide-react'

export const avisoType = defineType({
  name: 'aviso',
  title: 'Aviso',
  type: 'document',
  icon: BellIcon,
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tipo',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: 'Urgente', value: 'urgente' },
          { title: 'Informativo', value: 'informativo' },
          { title: 'General', value: 'general' },
        ],
        layout: 'radio',
      },
      initialValue: 'general',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha de publicación',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'vigenciaHasta',
      title: 'Vigente hasta (opcional)',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      description: 'Si se define, el aviso dejará de mostrarse después de esta fecha.',
    }),
    defineField({
      name: 'autor',
      title: 'Publicado por',
      type: 'string',
      placeholder: 'Pastor Principal, Secretaría, etc.',
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'tipo',
    },
    prepare({ title, subtitle }) {
      const emoji = subtitle === 'urgente' ? '🔴' : subtitle === 'informativo' ? '🔵' : '🟢'
      return { title, subtitle: `${emoji} ${subtitle}` }
    },
  },
  orderings: [
    {
      title: 'Urgentes primero',
      name: 'tipoAsc',
      by: [
        { field: 'tipo', direction: 'asc' },
        { field: 'fecha', direction: 'desc' },
      ],
    },
  ],
})
