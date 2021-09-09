(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [, , , , , , , , , , , function (e, t, a) {
        e.exports = a.p + "static/media/home-2.49923107.svg"
    }, function (e) {
        e.exports = {
            jobs: [{
                company: "Figma",
                positions: [{
                    name: "Product Designer",
                    link: "https://jobs.lever.co/figma/a57f4982-278b-4574-b2bf-d7ad3021153a?lever_source=internsdesign",
                    active: !0,
                    location: "San Francisco, CA",
                    details: ["New Grad", "Posted 8/18"]
                }]
            }, {
                company: "Microsoft",
                positions: [{
                    name: "UX Internships",
                    link: "https://careers.microsoft.com/us/en/job/1124353/User-Experience-Intern-Opportunities?jobsource=internsdesign&utm_source=internsdesign&utm_medium=internsdesign&utm_campaign=internsdesign",
                    active: !0,
                    location: "Redmond, WA",
                    details: ["Summer 2022", "Posted 8/9"]
                }]
            }]
        }
    }, function (e, t, a) {
        e.exports = a(26)
    }, , , , , function (e, t, a) {}, , function (e, t, a) {}, , function (e, t, a) {}, , , , function (e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0),
            r = a.n(n),
            i = a(10),
            l = a.n(i),
            o = (a(18), a(20), a(2)),
            s = a(3),
            c = a(6),
            u = a(4),
            m = a(5),
            d = a(1),
            h = (a(22), a(11)),
            p = a.n(h),
            b = a(7);
        b.a.initialize("UA-129388851-1");
        r.a.Component;
        var f = function (e) {
                function t() {
                    return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.company,
                            a = e.position;
                        return !0 === a.active ? r.a.createElement("div", null, r.a.createElement(b.a.OutboundLink, {
                            eventLabel: t,
                            to: a.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, a.name), r.a.createElement("br", null)) : r.a.createElement("div", null, a.name, r.a.createElement("br", null))
                    }
                }]), t
            }(r.a.Component),
            v = function (e) {
                function t() {
                    return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.job,
                            a = e.position,
                            n = t.company,
                            i = !1,
                            l = [],
                            o = "";
                        return a.active === this.props.active && (i = !0, l.push(r.a.createElement(f, {
                            company: n,
                            position: a,
                            key: a.name,
                            active: this.props.active
                        }))), i ? (a.details.forEach(function (e) {
                            o += e + ", "
                        }), o = o.substring(0, o.length - 2), r.a.createElement("tr", null, r.a.createElement("td", null, n), r.a.createElement("td", null, a.location), r.a.createElement("td", null, l), r.a.createElement("td", {
                            className: "details-column"
                        }, o))) : r.a.createElement(r.a.Fragment, null)
                    }
                }]), t
            }(r.a.Component),
            E = function (e) {
                function t() {
                    return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.filterText,
                            a = this.props.oldFilterText,
                            n = [];
                        return a !== t ? (this.props.handleOldFilterTextChange(), r.a.createElement("h6", {
                            className: "errorText"
                        }, "Awks, there was no match ", r.a.createElement("span", {
                            role: "img",
                            "aria-label": "sad"
                        }, "\ud83d\ude14"))) : (this.props.jobs.forEach(function (a) {
                            a.positions.forEach(function (i) {
                                -1 === i.details.indexOf(t) && "" !== t || n.push(r.a.createElement(v, {
                                    job: a,
                                    key: a.company,
                                    active: e.props.active,
                                    position: i
                                }))
                            })
                        }), 0 === n.length ? r.a.createElement("h6", {
                            className: "errorText"
                        }, "Awks, there was no match ", r.a.createElement("span", {
                            role: "img",
                            "aria-label": "sad"
                        }, "\ud83d\ude14")) : r.a.createElement("table", {
                            className: "u-full-width"
                        }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "Company"), r.a.createElement("th", null, "Location"), r.a.createElement("th", null, "Position"), r.a.createElement("th", {
                            className: "details-column"
                        }, "Details"))), r.a.createElement("tbody", null, n)))
                    }
                }]), t
            }(r.a.Component),
            g = function (e) {
                function t(e) {
                    var a;
                    return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                        filterText: "",
                        oldFilterText: ""
                    }, a.handleFilterTextChange = a.handleFilterTextChange.bind(Object(d.a)(Object(d.a)(a))), a.handleOldFilterTextChange = a.handleOldFilterTextChange.bind(Object(d.a)(Object(d.a)(a))), a.detailSeason = a.detailSeason.bind(Object(d.a)(Object(d.a)(a))), a
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{
                    key: "handleFilterTextChange",
                    value: function (e) {
                        this.state.filterText === e ? (document.getElementById(e).className = "detailButton", this.setState({
                            filterText: ""
                        })) : ("" !== this.state.filterText && (document.getElementById(this.state.filterText).className = "detailButton"), this.setState({
                            filterText: e
                        }), document.getElementById(e).className = "activeDetailButton")
                    }
                }, {
                    key: "handleOldFilterTextChange",
                    value: function () {
                        this.setState({
                            oldFilterText: this.state.filterText
                        })
                    }
                }, {
                    key: "detailSeason",
                    value: function (e) {
                        var t = !1;
                        return ["Summer", "Winter", "Spring", "Fall"].forEach(function (a) {
                            e.includes(a) && (t = !0)
                        }), t
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.jobs,
                            a = [],
                            n = [],
                            i = [],
                            l = !1,
                            o = !1,
                            s = {
                                Summer: 3,
                                Winter: 1,
                                Spring: 2,
                                Fall: 4
                            };
                        t.forEach(function (t) {
                            t.positions.forEach(function (r) {
                                r.active ? a.push(t.company) : n.push(t.company), r.details.forEach(function (t) {
                                    r.active && ("New Grad" === t ? l = !0 : "Sponsor" === t ? o = !0 : -1 === i.indexOf(t) && e.detailSeason(t) && i.push(t))
                                })
                            })
                        }), i.sort(function (e, t) {
                            var a = e.split(" "),
                                n = t.split(" ");
                            return a[1] - n[1] || s[a[0]] - s[n[0]]
                        }), l && i.push("New Grad"), o && i.push("Sponsor");
                        var c = this.props.active ? i.map(function (t) {
                            return r.a.createElement("div", {
                                id: t,
                                className: "detailButton",
                                onClick: function (a) {
                                    return e.handleFilterTextChange(t)
                                }
                            }, " ", t, " ")
                        }) : null;
                        return r.a.createElement("div", {
                            id: "jobs"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "six columns"
                        }, r.a.createElement("h5", null, this.props.active ? a.length + " Open Positions" : n.length + " Closed Positions"), r.a.createElement("h6", null, this.props.active ? "Updated 8/18/21" : "")), r.a.createElement("div", null)), r.a.createElement("div", {
                            className: "buttonColumn"
                        }, c), r.a.createElement("div", {
                            className: "twelve columns"
                        }, r.a.createElement(E, {
                            active: this.props.active,
                            jobs: this.props.jobs,
                            filterText: this.state.filterText,
                            oldFilterText: this.state.oldFilterText,
                            handleOldFilterTextChange: this.handleOldFilterTextChange
                        }))))
                    }
                }]), t
            }(r.a.Component),
            j = function (e) {
                function t() {
                    return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function () {
                        return r.a.createElement("div", {
                            id: "intro"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "twelve columns center-box"
                        }, r.a.createElement("div", {
                            className: "six columns details"
                        }, r.a.createElement(b.a.OutboundLink, {
                            className: "link",
                            eventLabel: "Twitter",
                            target: "_blank",
                            to: "https://twitter.com/theayooladaniel"
                        }, "Follow @theayooladaniel on Twitter"), r.a.createElement("h1", null, "wpjobs.careers"), r.a.createElement("h5", null, "Wpjobs.careers is the easiest way to find WordPress development job opportunities and resources to kickstart your career."), r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement(b.a.OutboundLink, {
                            className: "button",
                            eventLabel: "Subscribe to Substack",
                            target: "_blank",
                            to: "https://wpjobs.substack.com/"
                        }, "Subscribe to Newsletter"), r.a.createElement(b.a.OutboundLink, {
                            className: "button-secondary",
                            eventLabel: "Buy Me a Coffee",
                            target: "_blank",
                            to: "https://paystack.com/pay/wpjobs_careers"
                        }, "Support Website"))), r.a.createElement("div", {
                            className: "six columns"
                        }, r.a.createElement("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://wpjobs.careers"
                        }, r.a.createElement("img", {
                            src: p.a,
                            alt: "home illustration"
                        })))))))
                    }
                }]), t
            }(r.a.Component),
            O = (r.a.Component, function (e) {
                function t() {
                    return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function () {
                        return r.a.createElement("div", {
                            id: "announcement"
                        }, r.a.createElement("div", {
                            className: "container"
                        }, r.a.createElement("div", {
                            className: "row first"
                        }, r.a.createElement("div", {
                            className: "twelve columns"
                        }, r.a.createElement("p", null, r.a.createElement("span", {
                            role: "img",
                            "aria-label": "hand-wave"
                        }, "\ud83d\udc4b"), " I'm starting this job board for remote WordPress jobs online influenced by Tkkong ! Looking forward to sharing resources and WP development opportunities with you!"))), r.a.createElement("div", {
                            className: "row"
                        }, r.a.createElement("div", {
                            className: "twelve columns"
                        }, r.a.createElement("p", null, r.a.createElement("span", {
                            role: "img",
                            "aria-label": "briefcase"
                        }, "\ud83d\udcbc"), " Are you hiring a paid design intern, contract designer, or full-time designer? \xa0", r.a.createElement(b.a.OutboundLink, {
                            eventLabel: "send email for job",
                            target: "_blank",
                            to: "mailto:Daniel@wpjobs.careers"
                        }, "Email Daniel@wpjobs.careers"))))))
                    }
                }]), t
            }(r.a.Component)),
            k = function (e) {
                function t() {
                    return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                }
                return Object(m.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function () {
                        return r.a.createElement("div", null, r.a.createElement(j, null), r.a.createElement(O, null), r.a.createElement(g, {
                            jobs: this.props.jobs,
                            active: !0
                        }), r.a.createElement(g, {
                            jobs: this.props.jobs,
                            active: !1
                        }))
                    }
                }]), t
            }(r.a.Component);
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var y = a(12).jobs;
        l.a.render(r.a.createElement(k, {
            jobs: y
        }), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
            e.unregister()
        })
    }],
    [
        [13, 2, 1]
    ]
]);
//# sourceMappingURL=main.89eb8ec1.chunk.js.map