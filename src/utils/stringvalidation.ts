export function isGuidEmpty(guid: string): boolean {
  const guidEmpty = '00000000-0000-0000-0000-000000000000';
  return guid === guidEmpty;
}

export const GuidEmpty: string = '00000000-0000-0000-0000-000000000000';
