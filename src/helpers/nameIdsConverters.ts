import {
  REGIONS,
  COUNTRIES,
  ART_ORIENTATIONS,
  ART_SIGNED,
  ART_SIZES,
  ART_THEMES,
  ART_COLORS,
  ART_FRAMED,
  ART_CATEGORIES,
  ART_DESCRIPTIONS,
} from '@/constants';

interface Region {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
  region_id: number;
}

interface ArtworkData {
  id: number;
  name: string;
}

export function getCountryName(
  countryId: number,
  countries: Country[] = COUNTRIES
): string {
  const country = countries.find((c) => c.id === countryId);
  return country ? country.name : '';
}

export function getRegionName(
  regionId: number,
  regions: Region[] = REGIONS
): string {
  const region = regions.find((r) => r.id === regionId);
  return region ? region.name : '';
}

export function getCountryId(
  countryName: string,
  countries: Country[] = COUNTRIES
): number {
  const country = countries.find((c) => c.name === countryName);
  return country ? country.id : -1;
}

export function getRegionId(
  regionName: string,
  regions: Region[] = REGIONS
): number {
  const region = regions.find((r) => r.name === regionName);
  return region ? region.id : -1;
}

export function getArtOrientationName(
  artworkDataId: number,
  artworkData: ArtworkData[] = ART_ORIENTATIONS
): string {
  const artwork = artworkData.find((a) => a.id === artworkDataId);
  return artwork ? artwork.name : '';
}

export function getArtOrientationId(
  artworkDataName: string,
  artworkData: ArtworkData[] = ART_ORIENTATIONS
): number {
  const artwork = artworkData.find((a) => a.name === artworkDataName);
  return artwork ? artwork.id : -1;
}

export function getArtSignedName(
  artworkDataId: number,
  artworkData: ArtworkData[] = ART_SIGNED
): string {
  const artwork = artworkData.find((a) => a.id === artworkDataId);
  return artwork ? artwork.name : '';
}

export function getArtSignedId(
  artworkDataName: string,
  artworkData: ArtworkData[] = ART_SIGNED
): number {
  const artwork = artworkData.find((a) => a.name === artworkDataName);
  return artwork ? artwork.id : -1;
}

export function getArtSizeName(
  artworkDataId: number,
  artworkData: ArtworkData[] = ART_SIZES
): string {
  const artwork = artworkData.find((a) => a.id === artworkDataId);
  return artwork ? artwork.name : '';
}

export function getArtSizeId(
  artworkDataName: string,
  artworkData: ArtworkData[] = ART_SIZES
): number {
  const artwork = artworkData.find((a) => a.name === artworkDataName);
  return artwork ? artwork.id : -1;
}

export function getArtThemeNames(
  artworkDataIds: number[],
  artworkData: ArtworkData[] = ART_THEMES
): string[] {
  return artworkDataIds
    .map((artworkDataId) => {
      const artwork = artworkData.find((a) => a.id === artworkDataId);
      return artwork ? artwork.name : '';
    })
    .filter(Boolean);
}

export function getArtThemeIds(
  artworkDataNames: string[],
  artworkData: ArtworkData[] = ART_THEMES
): number[] {
  return artworkDataNames
    .map((artworkDataName) => {
      const artwork = artworkData.find((a) => a.name === artworkDataName);
      return artwork ? artwork.id : -1;
    })
    .filter((id) => id !== -1);
}

export function getArtColorNames(
  artworkDataIds: number[],
  artworkData: ArtworkData[] = ART_COLORS
): string[] {
  return artworkDataIds
    .map((artworkDataId) => {
      const artwork = artworkData.find((a) => a.id === artworkDataId);
      return artwork ? artwork.name : '';
    })
    .filter(Boolean);
}

export function getArtColorIds(
  artworkDataNames: string[],
  artworkData: ArtworkData[] = ART_COLORS
): number[] {
  return artworkDataNames
    .map((artworkDataName) => {
      const artwork = artworkData.find((a) => a.name === artworkDataName);
      return artwork ? artwork.id : -1;
    })
    .filter((id) => id !== -1);
}

export function getArtFramedName(
  artworkDataId: number,
  artworkData: ArtworkData[] = ART_FRAMED
): string {
  const artwork = artworkData.find((a) => a.id === artworkDataId);
  return artwork ? artwork.name : '';
}

export function getArtFramedId(
  artworkDataName: string,
  artworkData: ArtworkData[] = ART_FRAMED
): number {
  const artwork = artworkData.find((a) => a.name === artworkDataName);
  return artwork ? artwork.id : -1;
}

export function getArtCategoryNames(
  artworkDataIds: number[],
  artworkData: ArtworkData[] = ART_CATEGORIES
): string[] {
  return artworkDataIds
    .map((artworkDataId) => {
      const artwork = artworkData.find((a) => a.id === artworkDataId);
      return artwork ? artwork.name : '';
    })
    .filter(Boolean);
}

export function getArtCategoryIds(
  artworkDataNames: string[],
  artworkData: ArtworkData[] = ART_CATEGORIES
): number[] {
  return artworkDataNames
    .map((artworkDataName) => {
      const artwork = artworkData.find((a) => a.name === artworkDataName);
      return artwork ? artwork.id : -1;
    })
    .filter((id) => id !== -1);
}

export function getArtDescriptionName(
  artworkDataId: number,
  artworkData: ArtworkData[] = ART_DESCRIPTIONS
): string {
  const artwork = artworkData.find((a) => a.id === artworkDataId);
  return artwork ? artwork.name : '';
}

export function getArtDescriptionId(
  artworkDataName: string,
  artworkData: ArtworkData[] = ART_DESCRIPTIONS
): number {
  const artwork = artworkData.find((a) => a.name === artworkDataName);
  return artwork ? artwork.id : -1;
}
