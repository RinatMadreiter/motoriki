import { defineCollection, z } from '@nuxt/content'

const createEnum = (options: [string, ...string[]]) => z.enum(options)

const createBaseSchema = () => z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty()
})

const createLinkSchema = () => z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional().editor({ input: 'icon' }),
  trailingIcon: z.string().optional().editor({ input: 'icon' }),
  size: createEnum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  trailing: z.boolean().optional(),
  target: createEnum(['_blank', '_self']).optional(),
  color: createEnum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info']).optional(),
  variant: createEnum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional()
})

const createFeatureSchema = () => createBaseSchema().extend({
  icon: z.string().editor({ input: 'icon' }),
  ui: z.object({
    leading: z.string().optional()
  }).editor({ hidden: true })
})

const createIconTextItemSchema = () => z.object({
  icon: z.string().nonempty().editor({ input: 'icon' }),
  title: z.string().nonempty(),
  text: z.string().nonempty()
})

const createDetailItemSchema = () => z.object({
  label: z.string().nonempty(),
  value: z.string().nonempty(),
  icon: z.string().nonempty().editor({ input: 'icon' })
})

export const collections = {
  content: defineCollection({
    source: 'index.yml',
    type: 'page',
    schema: z.object({
      seo: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty()
      }).optional(),

      title: z.string().nonempty(),
      description: z.string().nonempty(),

      hero: z.object({
        links: z.array(createLinkSchema())
      }),
      intro: z.object({
        paragraph: z.string().nonempty()
      }),

      courseHighlights: z.array(z.string().nonempty()),

      courseSummary: z.string().nonempty(),
      movementBenefits: z.string().nonempty(),

      imageCaptions: z.object({
        turnen: z.string().nonempty(),
        turnen2: z.string().nonempty(),
        gesicht: z.string().nonempty()
      }).optional(),

      section: createBaseSchema().extend({
        headline: z.string().optional(),
        images: z.object({
          mobile: z.string().optional(),
          desktop: z.string().optional()
        }),
        features: z.array(
          z.object({
            title: z.string().nonempty(),
            description: z.string().optional(),
            icon: z.string().optional().editor({ input: 'icon' }),
            class: z.string().optional()
          })
        )
      }),
      features: createBaseSchema().extend({
        summary: z.string().nonempty(),
        features: z.array(createFeatureSchema())
      }),
      steps: createBaseSchema().extend({
        items: z.array(createFeatureSchema().extend({
          image: z.object({
            light: z.string().editor({ input: 'media' }),
            dark: z.string().editor({ input: 'media' })
          }).optional()
        }))
      }),
      pricing: createBaseSchema().extend({
        plans: z.array(
          createBaseSchema().extend({
            price: z.string().nonempty(),
            button: createLinkSchema(),
            features: z.array(z.string().nonempty()),
            highlight: z.boolean().optional(),
            billing_period: z.string().nonempty(),
            billing_cycle: z.string().nonempty()
          })
        )
      }),
      testimonials: createBaseSchema().extend({
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              avatar: z.object({
                src: z.string().editor({ input: 'media' }),
                alt: z.string().optional()
              }).optional(),
              target: createEnum(['_blank', '_self'])
            })
          }))
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      }),
      courseFlow: z.object({
        title: z.string().nonempty(),
        intro: z.string().nonempty(),
        outro: z.string().nonempty(),
        items: z.array(createIconTextItemSchema())
      }),

      benefitsOverview: z.object({
        title: z.string().nonempty(),
        summary: z.string().nonempty(),
        items: z.array(createIconTextItemSchema())
      }),

      courseDetails: z.object({
        title: z.string().nonempty(),
        items: z.array(createDetailItemSchema())
      })
    })
  })
}
