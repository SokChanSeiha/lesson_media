function PhotosListItem({photo}) {
  return (
    <div>
      <img className="h-20 w-20" src={photo.url} />
    </div>
  )
}

export default PhotosListItem