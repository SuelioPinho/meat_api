import * as restify from 'restify'

const mpContextType = 'application/merge-patch+json'

export const mergePatchBodyParser = (req: restify.Request, resp: restify.Response, next)=>{
  if(req.getContentType() == mpContextType && req.method === 'PATCH') {
    (<any>req).rawBody = req.body
    try{
      req.body = JSON.parse(req.body)
    } catch(e) {
      return next(new Error(`invalid content: ${e.message}`))
    }

  }

  return next()
}
