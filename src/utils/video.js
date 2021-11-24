export const getYoutubeId = (url) => {
  if (url.includes("youtu.be")) {
    const lst = url.split("/")
    return lst[lst.length - 1]
  } 
  if (url.includes("watch")) {
    return url.split("?v=")[1]
  }
}