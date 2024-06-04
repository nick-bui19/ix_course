const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already registered"],
    },
    bio: {
      type: String,
      equired: [true, "Email is required"],
    },
    image: {
      type: String,
      default:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAIBA//EADsQAAEDAgIGBgcGBwAAAAAAAAABAgMEEQUGISIxQVGhEhNhcYGRFiRysbLR4RQjJTNT8BU0QkNSYpP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ANSABpkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAreZ8wOonLR0Sp9otrv/T7E7fcBNVuI0VAnrdQyNdzb3cvgmkjPSzCelbrJrcepWxQ5Huke58jlc9y3Vzluq+J5Ka1GixGir09UqGSLvbezk8F0nUZMx7o3tfG5Wvat0c1bKniXXLOYXVqpR1zk+0W1H/qdi9oFkABAAAAAAAAAAAAAAAABx4vWph+HTVW1WtsztcuhOZmT3uke573dJ7lVzl4qv7Uuee5FbQ00SLodLdfBPqUopQAFQPUb3Rva9i2e1Uc1eCpsXzseQSrGn4RW/xDDoarYrm6/Y5NC8zsKzkSRXUNTFfQ2XpJ2XT6FmIAAAAAAAAAAAAAAAAKxntl6Olem6RU5fQpZo+ZqN1bg07GNvIy0jETfbbyuZwUoACoAAlWLpkRlqOqfxkRPJPqWci8s0bqLBoGPbaR95Hou6+xPKxKEAAAAAAAAAAAAAAAAApGZMvPppX1dFGr6dyq57G7Y17uHuLuL22AZJdNoNMq8Gw6rd0p6SNXrte3VVfKxx+imFdK/VS93WqUZ/2lky3l6SolZV1sasp2qjmMdtkXu4e8tFJguHUjulBSx9NNj3azk87nfe+0gAAAAAAAAAAAAAAAAAEXjeNU+Ex2d95UOTUiRea8EAkZZY4Y3STPaxjdrnLZCArs3UUCq2mjkqHJvTVb57VKjiOI1WJTdZVSdJEXVYmhre5DkKasM2b8Qf8AkxwRJ7KuXmc/pTi179fH/wAmkMBiLDDm/EGreaOCVPZVq8iYoc3UU6o2pjfTuX+pdZvntQowGDWIpY5o2yQva9jtjmrdD2Zfh2I1WGzdZSydFFXWYulru9C+YJjVPisdm/d1DU14lXmnFCKlAAAAAAAAAAAAPiqiIqqtkTSq8AI7HcVjwqjWRbOmdoiYu9ePchnVRPLUzvmner5Hrdzl3nZjuIrieIvmT8purEi/4p8yPAAAqAAKAAAH6U88tNOyaB6skYt2uTcfmCK0nAsVjxWjSRLNmbolYm5ePcpJGaYFiK4ZiLJv7TtSVP8AVfkaUioqIqLdF0ovEg+gAAAAAAAEPmqrWkwaXoKqPmVIm+O3kikwVHPsv8lDu13r36E+YFSABUAAUAAAAAAAADQ8q1a1eDRdNVV8SrG7w2clQzwtuQpV9dh9h6c0+RFW4AEAAAAAAKVntfxCmTckS/EfABWgAaQAAAAAAAAAAAs2RF/EKlNyxJ8R8BKLsACNAACP/9k=",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);