export type Setter<TType> = (arg: TType) => void;
export type Image = Record<string, () => Promise<{ default: string }>>;

export type NavigationProps = {
  About?: string
  Contact?: string
  Certification?: string
  Experience?: string
}