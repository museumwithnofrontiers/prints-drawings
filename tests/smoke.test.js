import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'printsDrawings',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Prints and drawings',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '919aef03-f815-592e-ab38-dd26eb510ac9',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'e6775e8c-d02b-5493-bf5e-5bcf66f6cbb0',
    dynasty: {
      item: '23e8db58-0148-5dc3-98b4-98cb5313ba16',
      name: 'Ayyubids',
    },
    timeline: {
      code: 'fr',
      id: 'fra',
      country: 'France',
    },
    partner: {
      id: '7cbc59ff-26f9-5d77-9853-2e0324c66c08',
      name: 'Municipal Library at the Archiginnasio Palace',
      city: 'Bologna',
      country: 'Italy',
      objects: 3,
    },
  },
})
