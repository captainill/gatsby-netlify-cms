import React from 'react'
import CMS from 'netlify-cms'

import Features from 'site/components/Features'
import Testimonials from 'site/components/Testimonials'
import Pricing from 'site/components/Pricing'

// import TagControl from 'site/widgets/tag/TagControl';
// import TagPreview from 'site/widgets/tag/TagPreview';

import CategoriesControl from 'site/widgets/categories/CategoriesControl';
import CategoriesPreview from 'site/widgets/categories/CategoriesPreview';

import { AboutPageTemplate } from 'site/templates/about-page';
import { ProductPageTemplate } from 'site/templates/product-page';
import { BlogPostTemplate } from 'site/templates/blog-post';

const AboutPagePreview = ({ entry, widgetFor }) =>
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />;

const BlogPostPreview = ({ entry, widgetFor }) => {
  const entryTags = entry.getIn(['data', 'entry_tags'])
  const tags = entryTags ? entryTags.toJS() : []

  return <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
    tags={tags}
  />;
}

const ProductPagePreview = ({ entry, widgetFor, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return <ProductPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    heading={entry.getIn(['data', 'heading'])}
    description={entry.getIn(['data', 'description'])}
    intro={{ blurbs }}
    main={{
      heading: entry.getIn(['data', 'main', 'heading']),
      description: entry.getIn(['data', 'main', 'description']),
      image1: {
        image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
        alt: entry.getIn(['data', 'main', 'image1', 'alt']),
      },
      image2: {
        image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
        alt: entry.getIn(['data', 'main', 'image2', 'alt']),
      },
      image3: {
        image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
        alt: entry.getIn(['data', 'main', 'image3', 'alt']),
      },
    }}
    fullImage={entry.getIn(['data', 'full_image'])}
    testimonials={testimonials}
    pricing={{
      heading: entry.getIn(['data', 'pricing', 'heading']),
      description: entry.getIn(['data', 'pricing', 'description']),
      plans: pricingPlans,
    }}
  />;
}

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

// CMS.registerWidget('tag', TagControl, TagPreview)
CMS.registerWidget('categories', CategoriesControl, CategoriesPreview)
