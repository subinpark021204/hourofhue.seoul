# GA4 event tracking

The site keeps both Google Tag Manager (`GTM-KGVRGNJ7`) and the direct GA4 tag (`G-9V186XR4K6`). Custom site events are emitted through `gtag('event', ...)` from `analytics.js`.

## Events

| Event | Trigger | Main parameters |
| --- | --- | --- |
| `navigation_click` | Header/footer navigation | `link_text`, `destination`, `click_location` |
| `cta_click` | General CTA button | `link_text`, `destination`, `click_location` |
| `outbound_click` | External link | `link_text`, `link_domain`, `destination`, `click_location` |
| `product_select` | Product link | `product_id`, `link_text`, `destination`, `click_location` |
| `product_view` | Product detail page view | `product_id`, `product_name` |
| `section_view` | A section becomes at least 40% visible | `section_id`, `section_title`, `section_index` |
| `scroll_depth` | 25%, 50%, 75%, 90% scroll | `scroll_percent` |
| `finder_start` | Tea Finder starts | `click_location` |
| `finder_answer` | Tea Finder answer selected | `question_step`, `question_category`, `option_id` |
| `finder_complete` | Tea Finder result generated | `result_blend`, `question_count` |
| `finder_restart` | Tea Finder restarts | — |
| `finder_result_action` | Share/download/copy/product action | `action_name`, `result_blend` |
| `lead_cta_click` | Product launch-offer CTA | `form_name`, `product_id`, `click_location` |
| `lead_form_start` | First interaction with a lead form | `form_name`, `product_id` |
| `lead_form_complete` | A valid lead flow completes | `form_name`, `product_id` |
| `lead_form_error` | Lead form validation fails | `form_name`, `error_type` |
| `lead_result_view` | Lead confirmation page view | `form_name` |
| `product_package_interaction` | Product package opens/slides | `product_id`, `action_name` |
| `ingredient_carousel_interaction` | Ingredient carousel changes | `product_id`, `action_name` |
| `review_submit` | Local product review is submitted | `product_id`, `rating` |
| `privacy_notice_open` | Privacy notice opens | `click_location` |
| `menu_toggle` | Mobile menu opens/closes | `action_name` |

Every event also includes `page_type` and `event_version`.

## Privacy

Names, email addresses, review text, and other free-form form values are never sent to GA4. Form tracking only sends safe metadata such as the form name, validation state, product ID, and rating.
