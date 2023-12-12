const defaultContent = `Default Content Block.`

export default function LeftRightContent({
  topContent1,
  topContent2,
  topContent3,
  middleContent1,
  middleContent2,
  middleContent3,
  bottomContent1,
  bottomContent2,
  bottomContent3,
  topPicture,
  middlePicture,
  bottomPicture,
}) {
  return (
    <div>
      <div className="flex flex-column justify-items-center">
        <div className="flex w-2/3 rounded-md m-3 p-10 bg-gray-100">
          {topContent1}
          <br className="mt-6"></br>
          {topContent2}
          <br className="mt-6"></br>
          {topContent3}
        </div>
        <div className="flex w-1/3 rounded-md m-3 p-10 bg-gray-100">{topPicture}</div>
      </div>
      <div className="flex flex-column justify-items-center">
        <div className="flex w-1/3 rounded-md m-3 p-10 bg-gray-100">{middlePicture}</div>
        <div className="flex w-2/3 rounded-md m-3 p-10 bg-gray-100">
          {middleContent1}
          <br className="mt-6"></br>
          {middleContent2}
          <br className="mt-6"></br>
          {middleContent3}
        </div>
      </div>
      {/* <div className="flex flex-column justify-items-center">
        <div className="flex w-2/3 rounded-md m-3 p-10 bg-gray-100">
          {bottomContent1}
          <br className="mt-6"></br>
          {bottomContent2}
          <br className="mt-6"></br>
          {bottomContent3}
        </div>
        <div className="flex w-1/3 rounded-md m-3 p-10 bg-gray-100">{bottomPicture}</div>
      </div> */}
    </div>
  )
}
