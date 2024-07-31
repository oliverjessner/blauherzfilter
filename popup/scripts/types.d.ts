type SocialMediaName = 'tiktok' | 'instagram' | 'youtube';
type SocialMediaType = {
    name: SocialMediaName;
    input: HTMLInputElement;
};
type Message = {
    name: SocialMediaName;
    checked: boolean;
};
