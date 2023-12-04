const defaultContent = `Default Content Block.`

export default function LeftRightContent({
  topContent,
  middleContent,
  bottomContent,
  topPicture,
  middlePicture,
  bottomPicture,
}) {
  return (
    <div>
      <div className="flex flex-column justify-items-center">
        <div className="flex w-2/3 rounded-md m-3 p-3 bg-gray-100">
          {topContent}
          <br></br>
          {topContent}
          <br></br>
          {topContent}
        </div>
        <div className="flex w-1/3 rounded-md m-3 p-3 bg-gray-100">{topPicture}</div>
      </div>
      <div className="flex flex-column justify-items-center">
        <div className="flex w-1/3 rounded-md m-3 p-3 bg-gray-100">{middlePicture}</div>
        <div className="flex w-2/3 rounded-md m-3 p-3 bg-gray-100">{middleContent}</div>
      </div>
      <div className="flex flex-column justify-items-center">
        <div className="flex w-2/3 rounded-md m-3 p-3 bg-gray-100">{bottomContent}</div>
        <div className="flex w-1/3 rounded-md m-3 p-3 bg-gray-100">{bottomPicture}</div>
      </div>
    </div>
  )
}
