class ApiResponse {
constructor(
      StatusCode, date , message = "Success"
    ){
        this.StatusCode = StatusCode
        this.data = data
        this.message = message
        this.success = StatusCode < 400
        
}
}

