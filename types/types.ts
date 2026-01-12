export interface TextWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface AyahProps extends React.HTMLAttributes<HTMLDivElement> {
  verseNumber: string;
  text: string;
}

export interface AyahType {
  verseNumber: string;
  text: string;
}

export interface PageType {
  chapterNumber: string;
  titleEn: string;
  titleAr: string;
  verseCount: number;
  text: AyahType[];
  juzNumber: number;
}

export interface SurahMetaData {
  number: number;
  startingPage: number;
  endingPage: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  revelationOrder: number;
}
