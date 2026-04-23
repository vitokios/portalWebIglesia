import { defineField, defineType } from 'sanity'
import { CalendarIcon } from 'lucide-react'

export const eventoType = defineType({
  name: 'evento',
  title: 'Evento',
  type: 'document',
  icon: CalendarIcon,
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
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hora',
      title: 'Hora de inicio',
      type: 'string',
      placeholder: '09:30',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'horaFin',
      title: 'Hora de término (opcional)',
      type: 'string',
      placeholder: '11:00',
    }),
    defineField({
      name: 'lugar',
      title: 'Lugar',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Culto', value: 'Culto' },
          { title: 'Formación', value: 'Formación' },
          { title: 'Oración', value: 'Oración' },
          { title: 'Retiro', value: 'Retiro' },
          { title: 'Comunidad', value: 'Comunidad' },
          { title: 'Jóvenes', value: 'Jóvenes' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'destacado',
      title: '¿Destacar en la página de inicio?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen del evento',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'fecha',
      media: 'imagen',
    },
  },
  orderings: [
    {
      title: 'Fecha (más próximo primero)',
      name: 'fechaAsc',
      by: [{ field: 'fecha', direction: 'asc' }],
    },
  ],
})
