import { defineField, defineType } from 'sanity'
import { PlayCircleIcon } from 'lucide-react'

export const videoEstudioType = defineType({
  name: 'videoEstudio',
  title: 'Estudio Bíblico (Video)',
  type: 'document',
  icon: PlayCircleIcon,
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'youtubeId',
      title: 'ID de YouTube',
      type: 'string',
      description: 'La parte final de la URL: youtube.com/watch?v=ESTE_ID',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Cápsula Bíblica', value: 'capsula' },
          { title: 'Predicación', value: 'predicacion' },
          { title: 'Estudio Bíblico', value: 'estudio' },
          { title: 'Devocional', value: 'devocional' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'predicador',
      title: 'Predicador / Expositor',
      type: 'string',
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
      name: 'duracion',
      title: 'Duración',
      type: 'string',
      placeholder: '12:30',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pasaje',
      title: 'Pasaje bíblico (opcional)',
      type: 'string',
      placeholder: 'Mateo 5:3',
    }),
    defineField({
      name: 'destacado',
      title: '¿Video destacado?',
      type: 'boolean',
      initialValue: false,
      description: 'Solo uno debería estar destacado a la vez.',
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'predicador',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle: `🎬 ${subtitle}` }
    },
  },
  orderings: [
    {
      title: 'Más reciente primero',
      name: 'fechaDesc',
      by: [{ field: 'fecha', direction: 'desc' }],
    },
  ],
})
