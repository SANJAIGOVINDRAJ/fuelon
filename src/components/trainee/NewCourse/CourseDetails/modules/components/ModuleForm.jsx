import React from 'react';

function ModuleForm({ handleModuleChange, index, module }) {
  return (
    <div className="bg-gray-200 border-violet-500 border-2 shadow-md rounded-md p-4 w-full">
      <div className="space-y-4">
        
        <div className="flex gap-5">
          <label htmlFor={`module-title-${index}`} className="text-gray-700 w-40">
            Title of the module:
          </label>
          <input
            type="text"
            id={`module-title-${index}`}
            placeholder="What is Laravel?"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={module.title || ""}
            onChange={(e) => handleModuleChange(e, index, 'title')}
          />
        </div>
        
        <div className="flex gap-5">
          <label htmlFor={`module-cost-${index}`} className="text-gray-700 w-40">
            Cost of the module:
          </label>
          <input
            type="text"
            id={`module-cost-${index}`}
            placeholder="$15"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={module.cost || ""}
            onChange={(e) => handleModuleChange(e, index, 'cost')}
          />
        </div>
        
        <div className="flex gap-5">
          <label htmlFor={`module-description-${index}`} className="text-gray-700 w-40">
            Description for Module:
          </label>
          <textarea
            id={`module-description-${index}`}
            placeholder="In this lesson, we will discuss Laravel."
            className="border border-gray-300 rounded-md p-2 h-24 w-full"
            value={module.description || ""}
            onChange={(e) => handleModuleChange(e, index, 'description')}
          />
        </div>

        <div className="flex gap-5">
          <label className="text-gray-700 w-40">Upload your video here:</label>
          <div className="flex items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
            <label htmlFor={`video-upload-${index}`} className="flex-1 cursor-pointer">
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  id={`video-upload-${index}`}
                  className="hidden"
                  onChange={(e) => handleModuleChange(e, index, 'video')}
                />
                <img src="/galleryimg.png" alt="upload" className="max-h-32 md:max-h-48" />
              </div>
              Click to upload your video
            </label>
          </div>
        </div>

        <div className="flex gap-5">
          <label className="text-gray-700 w-40">Upload your Quizzes here:</label>
          <div className="flex items-center border-2 border-violet-500 border-dashed rounded-md p-2 w-full">
            <label htmlFor={`quiz-upload-${index}`} className="flex-1 cursor-pointer">
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  id={`quiz-upload-${index}`}
                  className="hidden"
                  onChange={(e) => handleModuleChange(e, index, 'quiz')}
                />
                <img src="/galleryimg.png" alt="upload" className="max-h-32 md:max-h-48" />
              </div>
              Click to upload your quiz
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleForm;