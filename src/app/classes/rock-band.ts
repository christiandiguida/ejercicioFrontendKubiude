export class RockBand {
  id?: string;
  name: string;
  description: string;
  videoUrl: string;

  constructor(name: string, description: string, url: string) {
    this.name = name;
    this.description = description;
    this.videoUrl = url;
  }
}
