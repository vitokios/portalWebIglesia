import { defineField, defineType } from 'sanity'

export const horarioType = defineType({
  name: 'horario',
  title: 'Horarios de Culto',
  type: 'document',
  fields: [
    defineField({
      name: 'dia',
      title: 'Día',
      type: 'string',
      description: 'Ej: Domingo, Miércoles, Viernes',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'hora',
      title: 'Hora',
      type: 'string',
      description: 'Ej: 11:00, 19:30',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'culto',
      title: 'Nombre del culto o reunión',
      type: 'string',
      description: 'Ej: Culto General, Reunión de Oración, Jóvenes',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'orden',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número para ordenar los horarios (1, 2, 3...)',
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'activo',
      title: '¿Activo?',
      type: 'boolean',
      description: 'Desactivá para ocultar este horario sin borrarlo',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Orden de aparición',
      name: 'ordenAsc',
      by: [{ field: 'orden', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'dia', subtitle: 'hora', media: 'culto' },
    prepare({ title, subtitle }) {
      return { title, subtitle }
    },
  },
})
