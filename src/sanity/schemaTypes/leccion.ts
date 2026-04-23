import { defineField, defineType } from 'sanity'
import { BookOpenIcon } from 'lucide-react'

export const leccionType = defineType({
  name: 'leccion',
  title: 'Lección Dominical',
  type: 'document',
  icon: BookOpenIcon,
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título de la lección',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serie',
      title: 'Serie',
      type: 'string',
      placeholder: 'El Sermón del Monte',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha del domingo',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pasaje',
      title: 'Pasaje bíblico',
      type: 'string',
      placeholder: 'Mateo 5:1-12',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'versiculo',
      title: 'Versículo clave (texto completo)',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'versiculoRef',
      title: 'Referencia del versículo',
      type: 'string',
      placeholder: 'Mateo 5:3',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'maestro',
      title: 'Maestro / Predicador',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resumen',
      title: 'Resumen de la lección',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'objetivos',
      title: 'Objetivos de la clase',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Agregá uno por línea.',
    }),
    defineField({
      name: 'esSiguiente',
      title: '¿Es la lección de este domingo?',
      type: 'boolean',
      initialValue: false,
      description: 'Solo una lección debería tener esto activo a la vez.',
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'fecha',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle: `📅 ${subtitle}` }
    },
  },
  orderings: [
    {
      title: 'Por fecha (próxima primero)',
      name: 'fechaAsc',
      by: [{ field: 'fecha', direction: 'asc' }],
    },
  ],
})
