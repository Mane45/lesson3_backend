const path = require('node:path')
// Task 1: Implement a Path Analyzer
class PathAnalyzer {
    getBaseName(filePath) {
        return path.basename(filePath)
    }
    getDirName(filePath) {
        return path.dirname(filePath)
    }
    getExtension(filePath) {
        return path.extname(filePath)
    }
    isAbsolutePath(filePath) {
        return path.isAbsolute(filePath) ? true : false
    }
}
const pathExample = new PathAnalyzer()
console.log(pathExample.getBaseName(__filename))
console.log(pathExample.getDirName(__filename))
console.log(pathExample.getExtension(__filename))
console.log(pathExample.isAbsolutePath(__filename))

//Task 2: Implement a Path Normalizer
class PathNormalizer {
    normalizePath(filePath) {
        return path.normalize(filePath)
    }
    joinPaths(...paths) {
        return path.join(...paths)
    }
}
const normalize = new PathNormalizer()
console.log(normalize.normalizePath(__filename))
console.log(normalize.joinPaths("/home", "user", "documents", "file.txt"))

//Task 3: EventEmitter-Based Timer Class
const EventEmitter = require('node:events')
class Timer extends EventEmitter {
    constructor() {
        super()
    }
}
const timer = new Timer()
timer.on('start', number => {
    console.log(`started ${number}`)
})
//timer.emit('start', 5)
timer.on('trick', number => {
    for (let i = number; i > 0; i--) {
        console.log(`${i}`)
    }
})
//timer.emit('trick', 5)
timer.on('end', () => {
    console.log("end")
})
//timer.emit('end')

//Task 4: Event-Based User Action Tracker
class UserActionTracker extends EventEmitter {

    constructor() {
        super()
        this.action = []
    }
    actionLogged(action) {
        this.action.push(action)
        if (this.action.length < 5) {
            this.emit("actionLogged", action)
        } else this.emit("actionLogged", "maxActions")

    }
    getActionCount() {
        console.log(this.action.length)
    }

}

const userActionTracker = new UserActionTracker()
userActionTracker.on("actionLogged", (action) => {
    console.log(action)
})
userActionTracker.actionLogged("login")
userActionTracker.actionLogged("viewProfile")
userActionTracker.actionLogged("logout")
userActionTracker.actionLogged("updateProfile")
userActionTracker.actionLogged("logout")
userActionTracker.actionLogged("updateProfile")
userActionTracker.getActionCount()