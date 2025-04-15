import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import { comedianType } from './comedianType'
import { heroType } from './heroType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, comedianType, heroType],
}
