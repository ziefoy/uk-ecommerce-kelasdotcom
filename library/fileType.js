function fileType(ext){
    const img       = ["ase","art","bmp","blp","cd5","cit","cpt","cr2","cut","dds","dib","djvu","egt","exif","gif","gpl","grf","icns","ico","iff","jng","jpeg","jpg","jfif","jp2","jps","lbm","max","miff","mng","msp","nitf","ota","pbm","pc1","pc2","pc3","pcf","pcx","pdn","pgm","PI1","PI2","PI3","pict","pct","pnm","pns","ppm","psb","psd","pdd","psp","px","pxm","pxr","qfx","raw","rle","sct","sgi","rgb","int","bw","tga","tiff","tif","vtf","xbm","xcf","xpm","3dv","amf","ai","awg","cgm","cdr","cmx","dxf","e2d","egt","eps","fs","gbr","odg","svg","stl","vrml","x3d","sxd","v2d","vnd","wmf","emf","art","xar","png","webp","jxr","hdp","wdp","cur","ecw","iff","lbm","liff","nrrd","pam","pcx","pgf","sgi","rgb","rgba","bw","int","inta","sid","ras","sun","tga"];
    const vid       = ["mp4", "wav", "mpeg"];
    const audio     = ["mp3", "mpeg"];
    if (img.indexOf(ext) >= 0) {
        return 'image/' + ext;
    }else if(vid.indexOf(ext) >= 0){
        return 'video/'+ ext;
    }else if(audio.indexOf(ext) >= 0){
        return 'audio/' + ext;
    } else {
        return 'text/css';
    }
}

module.exports = fileType