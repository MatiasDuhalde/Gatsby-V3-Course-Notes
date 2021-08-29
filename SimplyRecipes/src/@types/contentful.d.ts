export interface ContentfulInternal {
  content: string;
  contentDigest: string; // datetime
  description: string | null;
  fieldOwners: string[] | null;
  ignoreType: boolean | null;
  mediaType: string;
  owner: string;
  type: string;
}

export interface ContentfulNode {
  id: string;
  parent: Partial<ContentfulNode>;
  children: Partial<ContentfulNode>[] | null;
  internal: Partial<ContentfulInternal>;
  sys?: Partial<ContentfulNodeSys>;
}

export interface ContentfulNodeSys {
  type: string;
  revision?: number;
  contentType?: Partial<ContentfulNodeSysContentType>;
}

export interface ContentfulNodeSysContentType {
  sys: Partial<ContentfulNodeSysContentTypeSys>;
}

export interface ContentfulNodeSysContentTypeSys {
  type: string;
  linkType: string;
  id: string;
}
