import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2"

export function Skills() {
  const educations = [
    {
      name: "XXXXXXXXXXXXXXXXXXXXXX | UFPA",
    },
    {
      name: "CURSO | AWS",
    },
    {
      name: "CURSO | AWS",
    },
  ]

  const skills = [
    {
      name: "Python",
      icon: "images/python.png",
    },
    // {
    //   name: "R",
    //   icon: "images/r.png",
    // },
    {
      name: "SQL",
      icon: "images/sql.png"
    },
    // {
    //   name: "Spark",
    //   icon: "images/spark.png",
    // },
    {
      name: "Docker",
      icon: "images/docker.png",
    },
    // {
    //   name: "Tensorflow",
    //   icon: "images/tensorflow.webp",
    // },
    {
      name: "Sklearn",
      icon: "images/Scikit_learn.png",
    },
    {
      name: "AWS",
      icon: "images/aws.png",
    },
    // {
    //   name: "FastAPI",
    //   icon: "images/fastapi.jpg",
    // },
    // {
    //   name: "MlFlow",
    //   icon: "images/mlflow.png",
    // },
    // {
    //   name: "BentoML",
    //   icon: "images/bentoml.png",
    // },
    // {
    //   name:"Terraform",
    //   icon:"images/terraform.webp"
    // }
  ]

  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
              >
                {education.name}
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
              Skills
            </h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 font-semibold">
              {skills.map((skill, index) => (
                <div key={`skill-${index}`} className="flex flex-row items-center gap-2 md:flex-col md:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    <img src={skill.icon} alt={skill.name} className="h-10 w-10 rounded"/>
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-headlin text-gray-900">{skill.name}</h4>
                  </div>
                </div>
              ))} 
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}