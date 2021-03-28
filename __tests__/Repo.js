import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import RepoScreen from '../components/Repo';
import fetchMock from "fetch-mock";

const data = {
  "data": {
    "viewer": {
      "repositories": {
        "totalCount": 79,
        "nodes": [
          {
            "name": "270assignment4",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "214assignment3",
            "owner": {
              "login": "MoranLi"
            },
            "description": "214assignment3"
          },
          {
            "name": "PushAndPull",
            "owner": {
              "login": "MoranLi"
            },
            "description": "learning usage of git and github"
          },
          {
            "name": "recipes",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "281lab6",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "270assignment5",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "214assignment4",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "214-cheat-sheet",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "214-labs",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "280-In-Class-Exercise",
            "owner": {
              "login": "MoranLi"
            },
            "description": "Basic Java Data Structure And Algorithm"
          },
          {
            "name": "340-In-Class-Exercise",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "280-assignment-1",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "280-assignment-2",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "340-assignment-1",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "340-assignment-2",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "340-assignment-02",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "340-assignment-4",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "MysomeApplication",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "JustJava",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "AndroidCalculator",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "UofS_Important_Date",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "pet-data",
            "owner": {
              "login": "MoranLi"
            },
            "description": "pet data api to provide data in mongoose database"
          },
          {
            "name": "pet-interface",
            "owner": {
              "login": "MoranLi"
            },
            "description": "pet web interface provide web interface  to show pet data and get recommendion on bring umbrella base on weather forecast"
          },
          {
            "name": "vuePizza",
            "owner": {
              "login": "MoranLi"
            },
            "description": "vue_pizza"
          },
          {
            "name": "398project",
            "owner": {
              "login": "MoranLi"
            },
            "description": "data visualization project"
          },
          {
            "name": "371_upload_file",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "gold-miner",
            "owner": {
              "login": "MoranLi"
            },
            "description": "gold miner game base on MIPS run with mars"
          },
          {
            "name": "android-unit-transfer",
            "owner": {
              "login": "MoranLi"
            },
            "description": "unit transfer tool base on andorid"
          },
          {
            "name": "Web-Scraping",
            "owner": {
              "login": "MoranLi"
            },
            "description": "python for web scraping "
          },
          {
            "name": "XMLparser",
            "owner": {
              "login": "MoranLi"
            },
            "description": "js xml parser for parse specific xml file to print needed information"
          },
          {
            "name": "mongoose_event",
            "owner": {
              "login": "MoranLi"
            },
            "description": "test project fro mongoose insert/delete/update/find"
          },
          {
            "name": "React-TicTac",
            "owner": {
              "login": "MoranLi"
            },
            "description": "React tut project"
          },
          {
            "name": "350",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "bank_employee",
            "owner": {
              "login": "MoranLi"
            },
            "description": "database in postgresql"
          },
          {
            "name": "GradleServer",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "File-system",
            "owner": {
              "login": "MoranLi"
            },
            "description": "file system using c working on linux"
          },
          {
            "name": "350server",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "2018SummerResearch",
            "owner": {
              "login": "MoranLi"
            },
            "description": "CSV converter fro Nicad report and Gcad report for visualization"
          },
          {
            "name": "DatabaseJSON",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "circle",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "dating",
            "owner": {
              "login": "MoranLi"
            },
            "description": "node.js base project fro random dating"
          },
          {
            "name": "RestfulDB",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "xxprof_website",
            "owner": {
              "login": "RexNotDinosaur"
            },
            "description": null
          },
          {
            "name": "algoritm-and-data-structure",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "udemy-machine-learning",
            "owner": {
              "login": "MoranLi"
            },
            "description": "Machine Learning A-Z course on udemy"
          },
          {
            "name": "usask_scheduler",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "cc189",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "usaskCourses",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "clone-world",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "The-Complete-Machine-Learning-Course-with-Python",
            "owner": {
              "login": "MoranLi"
            },
            "description": "udemy The Complete Machine Learning Course with Python Your progress course"
          },
          {
            "name": "leetcode",
            "owner": {
              "login": "MoranLi"
            },
            "description": "leetcode"
          },
          {
            "name": "wenyi",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "account-manager-mongodb-server",
            "owner": {
              "login": "MoranLi"
            },
            "description": "node.js based RESTAPI provider for mongodb"
          },
          {
            "name": "OpenGLLearning",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "485",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "fwff",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "434assignment",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "Dress",
            "owner": {
              "login": "MoranLi"
            },
            "description": "好耶  是女装"
          },
          {
            "name": "three.js-example",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "wel992.github.io",
            "owner": {
              "login": "wel992"
            },
            "description": "485 hosting page"
          },
          {
            "name": "AWS-learning-Note",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "MoranLi.github.io",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "awesome-programming-books",
            "owner": {
              "login": "MoranLi"
            },
            "description": "📚 经典技术书籍 PDF 文件，持续更新..."
          },
          {
            "name": "udemy-spring-core",
            "owner": {
              "login": "MoranLi"
            },
            "description": "learn spring core "
          },
          {
            "name": "system-design-primer",
            "owner": {
              "login": "MoranLi"
            },
            "description": "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards."
          },
          {
            "name": "sis001Text",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "fucking-algorithm",
            "owner": {
              "login": "MoranLi"
            },
            "description": "刷算法全靠套路，认准 labuladong 就够了！English version supported! Crack LeetCode, not only how, but also why. "
          },
          {
            "name": "sis001textExtension",
            "owner": {
              "login": "MoranLi"
            },
            "description": "chrome extension for sis001text"
          },
          {
            "name": "spring-rest-service",
            "owner": {
              "login": "MoranLi"
            },
            "description": "learn spring boot"
          },
          {
            "name": "consuming-rest",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "relational-data-access",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "authenticating-ldap",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "easyke",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "udemy-fa",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "easyke_copy",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "TrtRefer",
            "owner": {
              "login": "MoranLi"
            },
            "description": "Java & React project for TrtRefer aim to provided easy way for employees to find someone for reference"
          },
          {
            "name": "leetcodeNew",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "hello-graphql",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          },
          {
            "name": "GithubReactNativeGraphQl",
            "owner": {
              "login": "MoranLi"
            },
            "description": null
          }
        ]
      }
    }
  }
};

test('renders correctly', async () => {
  fetchMock.post("https://api.github.com/graphql", data)
  const wrapper = renderer.create( <RepoScreen /> );
  await wrapper.getInstance().componentDidMount();
  expect(wrapper).toMatchSnapshot();
});
