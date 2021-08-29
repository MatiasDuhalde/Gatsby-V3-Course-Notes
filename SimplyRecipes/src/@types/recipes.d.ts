import { ContentfulNode, ContentfulNodeSys } from './contentful';

export interface ContentfulRecipe extends ContentfulNode {
  contentful_id: string;
  node_locale: string;
  title: string;
  cookTime: number;
  preparationTime: number;
  servings: number;
  featured: boolean;
  image: ContentfulAsset;
  description: Partial<ContentfulRecipeDescriptionTextNode>;
  content: Partial<ContentfulRecipeContentJsonNode>;
  spaceId: string;
  createdAt: string; // datetime
  updatedAt: string; // datetime
  sys: Partial<ContentfulNodeSys>;
  childrenContentfulRecipeDescriptionTextNode: Partial<ContentfulRecipeDescriptionTextNode>[];
  childContentfulRecipeDescriptionTextNode: Partial<ContentfulRecipeDescriptionTextNode>;
  childrenContentfulRecipeContentJsonNode: Partial<ContentfulRecipeContentJsonNode>[];
  childContentfulRecipeContentJsonNode: Partial<ContentfulRecipeContentJsonNode>;
}

export interface ContentfulRecipeDescriptionTextNode extends ContentfulNode {
  description: string;
}

export interface ContentfulRecipeContentJsonNode extends ContentfulNode {
  tags: string[];
  tools: string[];
  ingredients: string[];
  instructions: string[];
}
