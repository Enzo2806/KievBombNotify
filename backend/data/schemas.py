# THESE ARE TEMPLATES FOR CREATING MOCK UP USERS AND DISTRICTS

class User:

    flagged = False

    def __init__(self, username, password):
        self.username = username
        self.password = password
    
    def get_user(self):
        return {
            "username": self.username,
            "password": self.password,
            "flagged": self.flagged
        }

class District:

    def __init__(self, district, bombing_status, report_quantity):
        self.district = district
        self.bombing_status = bombing_status
        self.report_quantity = report_quantity

    def get_district(self):
        return{
            "district": self.district,
            "bombing_status": self.bombing_status,
            "report_quantity": self.report_quantity
        }
