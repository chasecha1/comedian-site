import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import { comedianType } from './comedianType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, comedianType,],
}
