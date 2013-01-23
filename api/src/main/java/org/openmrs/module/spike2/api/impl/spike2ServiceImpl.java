/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 *
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
package org.openmrs.module.spike2.api.impl;

import org.openmrs.api.impl.BaseOpenmrsService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openmrs.module.spike2.api.spike2Service;
import org.openmrs.module.spike2.api.db.spike2DAO;

/**
 * It is a default implementation of {@link spike2Service}.
 */
public class spike2ServiceImpl extends BaseOpenmrsService implements spike2Service {
	
	protected final Log log = LogFactory.getLog(this.getClass());
	
	private spike2DAO dao;
	
	/**
     * @param dao the dao to set
     */
    public void setDao(spike2DAO dao) {
	    this.dao = dao;
    }
    
    /**
     * @return the dao
     */
    public spike2DAO getDao() {
	    return dao;
    }
}