package com.example.appointment.appointment

import jakarta.persistence.*
import java.io.Serializable

@Entity
@Table(name = "appointment")
class HelloModel : Serializable {
    @Id
    @SequenceGenerator(name = "appointment_sequence", sequenceName = "appointment_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "appointment_sequence")
    var appointmentId: Long? = null
    var name: String? = null
    var email: String? = null
    var phoneNumber: Long? = null
    var address: String? = null
    var city: String? = null
    var state: String? = null
    var zipCode: Int? = null
    var purpose: String? = null
    var date: String? = null
    var startTime: Int? = null

    constructor() {}
    constructor(appointmentId: Long?, name: String?, email: String?, phoneNumber: Long?, address: String?, city: String?, state: String?, zipCode: Int?, purpose: String?, date: String?, startTime: Int?) {
        this.appointmentId = appointmentId
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.address = address
        this.city = city
        this.state = state
        this.zipCode = zipCode
        this.purpose = purpose
        this.date = date
        this.startTime = startTime
    }

    constructor(name: String?, email: String?, phoneNumber: Long?, address: String?, city: String?, state: String?, zipCode: Int?, purpose: String?, date: String?, startTime: Int?) {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.address = address
        this.city = city
        this.state = state
        this.zipCode = zipCode
        this.purpose = purpose
        this.date = date
        this.startTime = startTime
    }

    override fun toString(): String {
        return "Appointment{" +
                "appointmentId=" + appointmentId +
                ", firstName='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", address=" + address +
                ", city=" + city +
                ", state=" + state +
                ", zip cpde=" + zipCode +
                ", purpose='" + purpose + '\'' +
                ", date=" + date +
                ", startTime=" + startTime +
                '}'
    }
}